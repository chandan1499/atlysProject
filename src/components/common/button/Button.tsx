import './buttonStyles.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ text, onClick, type }: ButtonProps) => {
    return (
        <button
            className='buttonBox'
            onClick={onClick}
            type={type ?? 'button'}
        >
            {text}
        </button>
    );
}