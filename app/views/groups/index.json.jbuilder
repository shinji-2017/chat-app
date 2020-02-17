json.array! @groups do |group|
  json.id group.id
  json.user_id group.users.ids
  json.text group.messages.last.text
  json.name group.name
  json.group_image group.image.url
  json.user_sign_in current_user
  json.user_group current_user.groups.ids
end
