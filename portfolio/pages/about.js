import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <header>
                <h1>
                    About Me
                </h1>
            </header>
            <p>
                <Link href="/">Back to Home</Link>
            </p>
        </div>
    );
}