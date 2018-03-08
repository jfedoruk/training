package com.tags;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.tags.TagsInTags.findTags;
import static com.tags.TagsInTags.getIndexesForTag;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

public class TagsInTagsTest {

    @Test
    public void testEmptyCase() {
        List<Integer> tags = findTags(new ArrayList<String>(), new ArrayList<String>());
        assertThat(tags.size(), is(1));
        assertThat(tags.get(0), is(0));
    }

    @Test
    public void testIndexesForTag() {
        List<String> availableTags = Arrays.asList("in", "rome", "spain", "the", "in", "spain");
        List<String> tagsToFind = Arrays.asList("in", "spain");

        List<Integer> expected = Arrays.asList(0, 4);
        assertThat(getIndexesForTag(tagsToFind.get(0), availableTags), is(expected));
        expected = Arrays.asList(2, 5);
        assertThat(getIndexesForTag(tagsToFind.get(1), availableTags), is(expected));
    }

    @Test
    public void testTags() {
        List<String> availableTags = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "a");
        List<String> tagsToFind = Arrays.asList("a", "d");

        List<Integer> result = findTags(tagsToFind, availableTags);

        assertThat(result.size(), is(2));
        assertTrue(Arrays.asList(0, 3).equals(result));
    }

    @Test
    public void testTags2() {
        List<String> availableTags = Arrays.asList("a", "b", "c", "a", "b", "c");
        List<String> tagsToFind = Arrays.asList("a", "b");

        List<Integer> result = findTags(tagsToFind, availableTags);

        assertThat(result.size(), is(2));
        assertTrue(Arrays.asList(0, 1).equals(result));
    }

    @Test
    public void testTags3() {
        List<String> availableTags = Arrays.asList("a", "c", "b", "c", "a", "a", "c", "b", "a");
        List<String> tagsToFind = Arrays.asList("a", "b");

        List<Integer> result = findTags(tagsToFind, availableTags);

        assertThat(result.size(), is(2));
        assertTrue(Arrays.asList(7, 8).equals(result));
    }


    /*

    a, f, f, b, f, f, c

    a -> b = 2
    a -> c = 5
    b -> c = 2

    a, f, f, b, f, f, c, a

    a -> b = 2    a -> b = 3
    b -> c = 2
    a -> c = 5    a -> c = 1

        a




    0,6 lub 3,7
    5 lub 4

     */
}