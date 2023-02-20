class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.references :user, null: false, foreign_key: true
      t.references :user2, references: :users, foreign_key: { to_table: :users }
      t.string :message

      t.timestamps
    end
  end
end
