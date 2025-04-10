import Link from "next/link";

function Button({ label, type, href, style }) {
    return type === "button" ? (
        <button className={style}>
            <label>{label}</label>
            <span className="slide"></span>
        </button>
    ) : (
        <Link href={href} className={style}>
            <label>{label}</label>
            <span className="slide"></span>
        </Link>
    );
}

export default Button;
