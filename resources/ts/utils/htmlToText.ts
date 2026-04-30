export function htmlToText(html: string): string {
    if (typeof window === "undefined") return html;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
}

export function getExcerpt(content: string, excerpt?: string | null, length: number = 150): string {
    if (excerpt) return excerpt;
    const plainText = htmlToText(content);
    if (plainText.length <= length) return plainText;
    return plainText.substring(0, length) + "...";
}
