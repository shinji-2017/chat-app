class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    # ユーザー検索
    @users = User.where(["name LIKE ?", "%#{params[:keyword]}%"]).where(id: @group.users)
    respond_to do |format|
      format.html
      format.json
    end

    @messages = Message.where(["text LIKE ?", "%#{params[:keyword]}%"]).where(id: @group.messages)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def create
    # メッセージ非同期
    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
        format.json
      end
    else
      @messages = @group.messages.includes(:user)
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end