param(
  [string]$Domain = "shaobo-xu.com",
  [string]$GitHubUser = ""
)

$ErrorActionPreference = "Stop"

if (-not $env:NAMESILO_API_KEY) {
  throw "Set NAMESILO_API_KEY in the current shell before running this script."
}

$baseUrl = "https://www.namesilo.com/api"
$githubPagesIps = @(
  "185.199.108.153",
  "185.199.109.153",
  "185.199.110.153",
  "185.199.111.153"
)

function ConvertTo-QueryString($Params) {
  ($Params.GetEnumerator() | ForEach-Object {
    "{0}={1}" -f [uri]::EscapeDataString($_.Key), [uri]::EscapeDataString([string]$_.Value)
  }) -join "&"
}

function Invoke-NameSiloApi($Operation, $Params) {
  $allParams = @{
    version = "1"
    type = "json"
    key = $env:NAMESILO_API_KEY
  }

  foreach ($key in $Params.Keys) {
    $allParams[$key] = $Params[$key]
  }

  $uri = "$baseUrl/$Operation?$(ConvertTo-QueryString $allParams)"
  Invoke-RestMethod -Method Get -Uri $uri
}

function Get-Records {
  $response = Invoke-NameSiloApi "dnsListRecords" @{ domain = $Domain }
  $records = $response.reply.resource_record
  if (-not $records) {
    return @()
  }
  if ($records -is [array]) {
    return $records
  }
  return @($records)
}

function Add-Record($Type, $Host, $Value) {
  Write-Host "Adding $Type $Host -> $Value"
  Invoke-NameSiloApi "dnsAddRecord" @{
    domain = $Domain
    rrtype = $Type
    rrhost = $Host
    rrvalue = $Value
    rrttl = "3600"
  } | Out-Null
}

$records = Get-Records

foreach ($ip in $githubPagesIps) {
  $exists = $records | Where-Object {
    $_.type -eq "A" -and ($_.host -eq $Domain -or $_.host -eq "@" -or $_.host -eq "") -and $_.value -eq $ip
  }

  if (-not $exists) {
    Add-Record "A" "" $ip
  }
}

if ($GitHubUser) {
  $wwwTarget = "$GitHubUser.github.io"
  $wwwExists = $records | Where-Object {
    $_.type -eq "CNAME" -and ($_.host -eq "www.$Domain" -or $_.host -eq "www") -and $_.value.TrimEnd(".") -eq $wwwTarget
  }

  if (-not $wwwExists) {
    Add-Record "CNAME" "www" $wwwTarget
  }
}

Write-Host "NameSilo DNS helper finished. It only adds missing GitHub Pages records and does not delete existing records."
