let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	mainnetExplorerUrl: "https://msrchain.net/",
	testnetExplorerUrl: "http://testnet.msrchain.net/",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 28,
	integratedAddressPrefix: 29,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 52,
	subAddressPrefixTestnet: 73,
	defaultMixin: 12, // default value mixin

	coinSymbol: 'BLOC',
	openAliasPrefix: "bloc",
	coinName: 'BLOC',
	coinUriPrefix: 'bloc:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
	coinSupply: 18500000
};
