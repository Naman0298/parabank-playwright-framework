import { request, Page } from '@playwright/test';

export async function getAuthenticatedApiContext(page: Page) {
    const cookies = await page.context().cookies();
    const jsession = cookies.find(c => c.name === 'JSESSIONID');
    if (!jsession) throw new Error('JSESSIONID cookie not found');
    return await request.newContext({ extraHTTPHeaders: { Cookie: `JSESSIONID=${jsession.value}` } });
}