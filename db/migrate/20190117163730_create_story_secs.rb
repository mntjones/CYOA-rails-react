class CreateStorySecs < ActiveRecord::Migration[5.2]
  def change
    create_table :story_secs do |t|
      t.string :secId
      t.text :body

      t.timestamps
    end
  end
end
