class CreateGroupImages < ActiveRecord::Migration[5.0]
  def change
    create_table :group_images do |t|
      t.string :image
      t.references :group, foreign_key: true
      t.timestamps
    end
  end
end
