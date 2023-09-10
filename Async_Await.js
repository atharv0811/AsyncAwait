const posts = [];

function createPostAndPush(content) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = { content };
            posts.push(post);
            resolve(posts[posts.length - 1]);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const deletedPost = posts.pop();
            resolve(deletedPost);
        }, 1000);
    });
}

(async () => {
    try {
        const [post, lastActivityTime] = await Promise.all([createPostAndPush("Hey"), updateLastUserActivityTime()]);
        console.log("New Post is:", post.content);
        console.log("Last Activity Time:", lastActivityTime);

        const deletedPost = await deletePost();
        console.log("The Deleted post is:", deletedPost.content);

        if (posts.length > 0) {
            console.log("New Posts:", posts);
        }
    } catch (error) {
        console.error("Error:", error);
    }
})();