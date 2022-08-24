import { useState } from 'preact/hooks'

interface tocElement {
    headingLevel: number;
    headingNumber: string;
    headingId: string;
    headingText: string;
    pageNumber: number;
}

function extractToc(): tocElement[] {
    const spans = [
        ...document.getElementsByTagName('span'),
    ].filter(
        span => span.id || /^h\d$/.test(span.className),
    )

    const pages = []
    const headings = []
    for (const span of spans) {
        if (span.id) {
            const pageNumber = parseInt(span.id.substring(1))
            const pageId = span.id
            pages.push({ pageNumber, pageId })
        }
        const anchor = span.getElementsByTagName('a')[0]
        if (anchor) {
            const headingLevel = parseInt(span.className.substring(1))
            const headingNumber = anchor.innerText
            const headingId = anchor.id
            const headingText = anchor.nextSibling?.textContent?.substring(1).trim() || ''
            headings.push({
                headingLevel,
                headingNumber,
                headingId,
                headingText,
                pageNumber: pages.length && pages[pages.length - 1].pageNumber,
            })
        }
    }
    return headings
}

function renderListItem(heading: tocElement) {
    const liClasses: string[] = [
        'py-1',
        'text-base',
        'text-gray-600',
        'hover:text-gray-900',
        'font-normal',
        'hover:font-semibold',
        `pl-${(heading.headingLevel - 1) * 2}`,
    ];
    return (
        <li className={liClasses.join(' ')}>
            <a href={`#${heading.headingId}`}>
                {`${heading.headingNumber} ${heading.headingText}`}
            </a>
        </li>
    )
}

function renderToc(toc: tocElement[]) {
    return (
        <ul className='list-none'>
            {toc.map(renderListItem)}
        </ul>
    )
}

export default function ToC() {
    const toc = extractToc()

    return (
        <div className='m-4 overflow-auto scrollbar'>
            {renderToc(toc)}
        </div>
    )
}
