import { useState } from 'preact/hooks'

import ToggleButton from './toggle-button'
import ToC from './toc'

const SIDEBAR_WIDTH_SMALL = 40
const SIDEBAR_WIDTH = 96

export function App() {
  const [shown, setShown] = useState(false)

  const divClasses: string[] = [
    'fixed',
    'top-0',
    'bottom-0',
    'flex',
    'flex-col',
    'bg-emerald-200',
    'max-w-full',
    'transition-transform duration-150 ease-in-out',
    `-right-${SIDEBAR_WIDTH_SMALL} sm:-right-${SIDEBAR_WIDTH}`,
    `w-${SIDEBAR_WIDTH_SMALL}`,
    `sm:w-${SIDEBAR_WIDTH}`,
  ];
  if (shown) {
    divClasses.push(`-translate-x-${SIDEBAR_WIDTH_SMALL} sm:-translate-x-${SIDEBAR_WIDTH}`);
  }

  return (
    <div className={divClasses.join(' ')}>
      <ToggleButton
        onHide={() => setShown(false)}
        onShow={() => setShown(true)}
      />
      <ToC />
    </div>
  )
}
