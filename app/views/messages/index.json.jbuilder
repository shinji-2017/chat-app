json.array! @user do |user|
  json.user_id user.id
  json.user_image user.image.url
  json.user_name user.name
  json.user_status user.status
end