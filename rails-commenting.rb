# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The code below shows the model name. This code is establishing the model is going through the Application Controller, and showing the model name is also a Controller. This is the start of the logic for the site. 
class BlogPostsController < ApplicationController
  def index
    # ---2) The code below is an instance variable. The instance variable is assigned to get the model's information from the database. The .all is getting all the database information that has been added. 
    @posts = BlogPost.all
  end

  # ---3) The code below is the show method. It is the second step in the CRUD actions made to get information. The purpose of the show method is to show one piece of data from the database. The instance variable is identifying the model, then finding each id or primary key information. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The code below is the new method. It is the first step in creating and getting information from the database. The instance variable is starting the process to create a new form in the model. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The code below is apart of the create method. The instance variable is referencing the model and using .create with a parameter to have the form fillable to add to the database. the blog_post_params is referencing the model and that the model's keys will need to be filled. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The code below is apart of the edit method. The instance variable is going through a pathway of the model's database to edit a specific piece of data. The data is identified by the id, or primary key. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The code below is apart of the update method. The instance variable is referencing the model and using .update with a parameter to have the data updated. The blog_post_params is referencing the model and that the model's keys will need to be updated.
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
      # ---8) The code below is apart of the destroy method. The code is in the else statement so if the conditions above have not been met the catch all will be redirected to the first method, index. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The code below is private making all the code following not be visible or changeable. Only the user with access to the application will be able to access and update the code following private. 
  private
  def blog_post_params
    # ---10) The code below is apart of a method to require specific inputs of informtaion related to the model's database. The pathway to this information has been established in the code above in create and update. This information will be added to the database and will be able to be accessed only by the user. 
    params.require(:blog_post).permit(:title, :content)
  end
end
