import praw
import json
import config


# Initialize the Reddit API client
reddit = praw.Reddit(
    client_id= config.client_id,
    client_secret= config.client_secret,
    user_agent= config.user_agent
)

# Define the subreddit you want to search in
subreddit_name = config.subreddit_name

# Get the subreddit instance
subreddit = reddit.subreddit(subreddit_name)

# Define the flair you want to filter for
flair_name = config.flair_name

# Get the posts with the specified flair in the subreddit
newest_post = subreddit.search(f'flair_name:"{flair_name}"', sort='new', time_filter='day')

comments = []


# Iterate over the posts and retrieve the comments
for post in newest_post:
    try:
        print(f'Post title: {post.title}')
        print('Comments:')
        post.comments.replace_more(limit=None)
        for comment in post.comments.list():
            print(f'Comment: {comment.body}')
            print(f'Upvotes: {comment.score}')
            print('---')
    except:
        print("End...")
        #print(comments)