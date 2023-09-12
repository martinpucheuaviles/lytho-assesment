package lytho.pictures.lythopictures.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lytho.pictures.lythopictures.model.Picture;
import lytho.pictures.lythopictures.repository.PictureRepository;

@CrossOrigin(origins = "http://localhost:8081") //alowed origins
@RestController
@RequestMapping("/api")
public class PictureController {
    

  @Autowired
  PictureRepository pictureRepository;

//   @GetMapping("/pictures")
//   public ResponseEntity<List<Picture>> getAllPictures(@RequestParam(required = false) String name) {
    
//   }

//   @GetMapping("/pictures/{id}")
//   public ResponseEntity<Picture> getPictureById(@PathVariable("id") String id) {
    
//   }

  @PostMapping("/uploadPicture")
  public ResponseEntity<Picture> uploadPicture(@RequestBody Picture picture) {
    try {
        
        Picture _picture = pictureRepository.save(new Picture(picture.getName(), picture.getDescription(), picture.getUrlPath()));
        // Picture _picture = ttpictureRepository.save(new Picture(picture.getname(), picture.getDescription(), false));
        return new ResponseEntity<>(_picture, HttpStatus.CREATED);
      } catch (Exception e) {
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
      }  
    
  }

  @GetMapping("/pictures")
  public ResponseEntity<List<Picture>> getAllPictures(@RequestParam(required = false) String name) {
      try {
          List<Picture> pictures = new ArrayList<Picture>();

          if (name == null)
              pictureRepository.findAll().forEach(pictures::add);
          else
              pictureRepository.findByNameContaining(name).forEach(pictures::add);

          if (pictures.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
          }

          return new ResponseEntity<>(pictures, HttpStatus.OK);
      } catch (Exception e) {
          return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }

//   @PutMapping("/pictures/{id}")
//   public ResponseEntity<Picture> updatePicture(@PathVariable("id") String id, @RequestBody Picture Picture) {
    
//   }

//   @DeleteMapping("/pictures/{id}")
//   public ResponseEntity<HttpStatus> deletePicture(@PathVariable("id") String id) {
    
//   }

//   @DeleteMapping("/pictures")
//   public ResponseEntity<HttpStatus> deleteAllPictures() {
    
//   }

//   @GetMapping("/pictures/published")
//   public ResponseEntity<List<Picture>> findByPublished() {
    
//   }

}