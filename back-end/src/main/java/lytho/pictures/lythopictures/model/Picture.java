package lytho.pictures.lythopictures.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pictures")
public class Picture {
  @Id
  private String id;

  private String name;
  private String description;
  private String urlPath;

  public Picture(){

  }

  public Picture(String name, String description, String urlPath) {
    this.name = name;
    this.description = description;
    this.urlPath = urlPath;
  }

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getUrlPath() {
    return urlPath;
  }

  public void setUrlPath(String urlPath) {
    this.urlPath = urlPath;
  }  

  @Override
  public String toString() {
    return "Picture [id=" + id + ", name=" + name + ", desc=" + description + ", urlPath=" + urlPath + "]";
  }  

}