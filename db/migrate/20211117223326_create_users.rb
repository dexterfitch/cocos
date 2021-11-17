class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :nickname
      t.string :email
      t.string :password_digest
      t.string :linkedin
      t.string :url
      t.string :slack

      t.timestamps
    end
  end
end