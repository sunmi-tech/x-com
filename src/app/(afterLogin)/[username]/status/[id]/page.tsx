import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from './status.module.css'
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "./_component/CommentForm";

export default function Status() {
    return (
        <main className={style.main}>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>게시하기</h3>
            </div>
            <Post />
            <CommentForm />
            <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            </div>
        </main>
    )
}