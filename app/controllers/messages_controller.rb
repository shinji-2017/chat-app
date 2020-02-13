class MessagesController < ApplicationController
  
  def index 
    @user = User.new
  end

  def new
    @group = Group.new
    @group.users << current_user
  end


end
