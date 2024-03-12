import { useTranslation } from "next-i18next";
import React, { ChangeEventHandler, useCallback, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useCategoriesQuery } from "../../shared/hooks/useCategoriesQuery";
import { useCategoryTagStore } from "../../providers/store";
import Input from "../../shared/UI/Input/Input";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
const HomeScreen = () => {

  const [isDisabled, setIsDisabled] = useState(true)
  const {data} = useCategoriesQuery()
  const categoryTags = useCategoryTagStore(state =>state.categoryTags)
  const categoryIndex= useCategoryTagStore(state =>state.categoryIndex)

  const addCNewTag = useCategoryTagStore(state =>state.addNewTag)
  const removeTag = useCategoryTagStore(state =>state.removeTag)
  const draggTag = useCategoryTagStore(state =>state.draggTag)
  const calculateCatagoryIndex = useCategoryTagStore(state =>state.calculateCategoryIndex)

  const suggestions = data?.data.map((category:any) => {
    return {
      id: category?.id,
      text: category?.name,
      value:category?.value
      
    };
  });

  const handleDelete = (i: number) => {
    removeTag(i)
    calculateCatagoryIndex(categoryTags[i].value, "-")
  };

  const handleAdd = useCallback((tag: any) => {
    addCNewTag(tag)
    calculateCatagoryIndex(tag.value, "+")
    
  }, [categoryIndex]);

  const handleDrag = (tag: any, currPos: number, newPos: number) => {
    draggTag(tag, currPos, newPos)
  };

  const handleTagClick = useCallback((numberIndex:number) => {
      setIsDisabled(!isDisabled)
    
  }, [isDisabled])

  const handleChange = (data:any) => {
   
  
}

  
  const { t } = useTranslation("home");
  return (
    <>
      {t("title")}
      <ReactTags
        tags={categoryTags}
        suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAdd}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        autocomplete
      />
      <div className="flex items-baseline	pl-2">
      {categoryTags?.map((tag, indexPosition) => (
        <div className="box-border h-20  p-1">
          <div className="h-full w-full">
            <div className="flex">
              <Input className="flex-wrap w-8" value={tag?.value + " + "} disabled={isDisabled} onChange={handleChange} placeholder={t("placeholder")}/>
            </div>
          </div>
        </div>
      ))}
      {categoryTags.length >1 && (
         <div className="">
         = {categoryIndex}
       </div>
      )}
     
      </div>
     
    </>
  );
};

export default HomeScreen;
