package lytho.pictures.lythopictures.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import lytho.pictures.lythopictures.model.Picture;



public interface PictureRepository extends MongoRepository<Picture, String> {
  List<Picture> findByNameContaining(String title);
  //   List<Picture> findByPublished(boolean published);
}

//we can use MongoRepository’s methods: save(), findOne(), findById(), findAll(), count(), delete(), deleteById()… without implementing these methods.

