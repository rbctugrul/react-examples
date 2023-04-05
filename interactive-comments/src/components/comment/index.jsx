import { CommentProvider } from "./useComment";
import { Comment as CommentRaw } from "./comment";

function CommentWithProvider(props) {
  return (
    <CommentProvider {...props}>
      <CommentRaw />
    </CommentProvider>
  );
}

export { useComment } from "./useComment";
export { CommentWithProvider as Comment };
