import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function BlogPostPage({ params }) {
    return (
    <main>
        <h1>Blog Post</h1>
        <p>{params.slug}</p>
    </main>
    );
}