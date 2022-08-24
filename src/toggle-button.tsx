import { useState } from 'preact/hooks'

interface ToggleButtonProps {
    onHide?: () => void;
    onShow?: () => void;
}

export default function ToggleButton({ onHide, onShow }: ToggleButtonProps) {
    const [shown, setShown] = useState(false)

    const toggle = () => {
        if (shown) {
            onHide && onHide()
        } else {
            onShow && onShow()
        }
        setShown(!shown)
    }

    const buttonClasses: string[] = [
        'absolute',
        '-left-8 top-8',
        'w-8 h-20',
        'text-white',
        'bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200',
        'hover:bg-gradient-to-br',
        'focus:outline-none',
        'font-medium',
        'rounded-l-lg',
        'text-sm text-center',
    ];

    return (
        <button className={buttonClasses.join(' ')} onClick={toggle}>
            {shown ? '>' : '<'}
        </button>
    )
}
