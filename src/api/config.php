<?php

$daemonAddress = getenv('daemon_address') !== false ? getenv('daemon_address') : 'uk.theblocmoney.com';
$rpcPort = getenv('daemon_rpc_port') !== false ? (int)getenv('daemon_rpc_port') : 2086;
$coinSymbol = 'bloc';
