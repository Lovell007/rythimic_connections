class PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show, :update, :destroy, :add_song]
  before_action :authorize_request, only: [:index, :create, :update, :destroy]

  # GET /playlists
  def index
    @playlists = @current_user.playlists

    render json: @playlists
  end

  # GET /playlists/1
  def show
    render json: @playlist, include: :songs
  end

  # POST /playlists
  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user = @current_user

    if @playlist.save
      render json: @playlist, status: :created
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /playlists/1
  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /playlists/1
  def destroy
    @playlist.destroy
  end

  def add_song
    @song = Song.find(params[:song_id])
    @playlist.songs << @song
  
    render json: @playlist, include: :songs
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def playlist_params
      params.require(:playlist).permit(:name)
    end
end
