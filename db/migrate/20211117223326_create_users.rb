class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :nickname
      t.string :email
      t.string :linkedin
      t.string :slack
      t.string :url

      t.timestamps
    end
  end
end
