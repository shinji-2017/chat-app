class GroupsController < ApplicationController

  before_action :set_group, only: [:edit, :update]
  
  def index
    @group = Group.new
    @user = Group.where(id: current_user.groups.ids)
    @groups = Group.where(["name LIKE ?", "%#{params[:keyword]}%"]).where(id: @user.ids)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit 
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      redirect_to group_messages_path(@group)
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit( :image, :name, user_ids: [])
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
