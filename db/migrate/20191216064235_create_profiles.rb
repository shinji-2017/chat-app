class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :name, null: false, index: true
      t.string :email, null: false
      t.text   :image
      t.text   :message
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
