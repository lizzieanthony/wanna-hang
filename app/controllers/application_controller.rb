class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    User.find_by(id: session[:user_id])
  end

  def login_user
    session[:user_id] = user.id
  end

end
