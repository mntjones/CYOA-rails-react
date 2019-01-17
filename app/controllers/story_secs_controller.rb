class StorySecsController < ApplicationController 

  before_action :findCurrentSection, only: [:show]

  def index 
    render json: StorySec.all
  end


  def show 
    render json: @storySec
  end


  private 

    def findCurrentSection
      @storySec = StorySec.find_by(secId: params[:secId])
    end

end