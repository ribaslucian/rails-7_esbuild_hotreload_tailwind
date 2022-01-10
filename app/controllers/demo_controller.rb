class DemoController < ApplicationController
  def show
    return render "demo/#{params[:view]}"
  end
end
