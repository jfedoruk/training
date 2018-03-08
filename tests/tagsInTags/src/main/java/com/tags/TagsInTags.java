package com.tags;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class TagsInTags {

    public static void main(String[] args) {

    }

    public static List<Integer> findTags(List<String> tagsToFind, List<String> availableTags) {
        return new ArrayList<Integer>(Arrays.asList(0));
    }

    public static List<Integer> getIndexesForTag(String tag, List<String> availableTags) {
        List<Integer> indexes = new ArrayList<Integer>();

        for (int i = 0; i < availableTags.size(); i++) {
            if (availableTags.get(i).equals(tag)) {
                indexes.add(i);
            }
        }

        return indexes;
    }

}