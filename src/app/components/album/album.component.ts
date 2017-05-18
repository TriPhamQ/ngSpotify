import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../../album';

@Component({
  moduleId: module.id,
  selector: 'Album',
  templateUrl: 'album.component.html',
})
export class AlbumComponent {
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params.map(params => params['id']).subscribe((id) => {
      this._spotifyService.getAlbum(id).subscribe(album => {
        this.album = album;
      });
    });
  }
}
