import praw
import json
#from . import config
import os

# Initialize the Reddit API client
reddit = praw.Reddit(
    client_id=os.environ.get('client_id'),
    client_secret=os.environ.get('client_secret'),
    user_agent=os.environ.get('user_agent'),
)

# Define the subreddit you want to search in
subreddit_name = os.environ.get('subreddit_name')

# Get the subreddit instance
subreddit = reddit.subreddit(subreddit_name)

# Define the flair you want to filter for
flair_name = os.environ.get('flair_name')

# Get the posts with the specified flair in the subreddit
newest_post = subreddit.search(
    f'flair_name:"{flair_name}"', sort="new", time_filter="day"
)

def get_title():
    for post in newest_post:
        return (post.title)

def get_comments(): 
    comments = []

    # Iterate over the posts and retrieve the comments
    for post in newest_post:
        try:
            print(f"Post title: {post.title}")
            print("Comments:")
            post.comments.replace_more(limit=None)
            for comment in post.comments.list():
                if (
                    comment.author and comment.is_root and comment.author.name != "sbpotdbot"
                ):  # has author and is not a reply to a comment
                    com = {
                        "author": comment.author.name,
                        "body": comment.body,
                        "upvotes": comment.score,
                    }
                    comments.append(com)
        except:
            print("End...")

    return comments

