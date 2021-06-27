<template>
	<div>
		<div class="container">
			<!-- this line is used by starport scaffolding # 4 -->
		<SpType modulePath="sap200.bifrost.bifrost" moduleType="SendToTezosSigned"  />
		<SpType modulePath="sap200.bifrost.bifrost" moduleType="ReceivedFa12Txs"  />
		<SpType modulePath="sap200.bifrost.bifrost" moduleType="SendToTezos"  />
		<SpType modulePath="sap200.bifrost.bifrost" moduleType="ReceivedTxs"  />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Types'
}
</script>
