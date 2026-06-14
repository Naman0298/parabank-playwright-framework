export async function getAccountBalance(apiContext: any, accountId: string) {

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountId}`);
    const account = await response.json();
    return Number(account.balance);
}
