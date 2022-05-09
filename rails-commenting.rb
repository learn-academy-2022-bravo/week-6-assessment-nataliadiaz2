# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The code below shows the model name
class BlogPostsController < ApplicationController
  def index
    # ---2) The code below is an instance variable. The instance variable is assigned as the model's information/database.
    @posts = BlogPost.all
  end

  # ---3) The code below is the show method. It is the second step in the CRUD actions. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The code below is making the code following private, meaning it will not be seen or related in any way to be visible or changed. 
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
