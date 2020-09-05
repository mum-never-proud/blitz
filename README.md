# blitz.js (compact DOM & Event Library)
<ul>
  <li>Small, fast, and modular DOM & Event library for modern browsers.</li>
  <li>Same familiar API as jQuery (but without the extra <b>weight</b> of modules like $.ajax, $.animate etc.).</li>
  <li>The source is written in ES6.</li>
  <li><mark>Experimental</mark> single event manager.</li>
</ul>


## CSS

> ### css

Get the value of a style property for the first element, or set one or more style properties for each element in the collection.

```javascript
$('.blitz').css('margin'); // get
$('.blitz').css('backgroundColor', '#333'); // set
$('.blitz').css({ 'color': '#fff', 'backgroundColor': '#333' }); // set multiple
```

## DOM

> append

Append element(s) to each element in the collection.

```javascript
$('.blitz').append(ele);
$('.blitz').append('<p>blitz.js</p>');
$('.blitz').append([ele, '<p>blitz.js</p>']);
```

> prepend

Place element(s) at the beginning of each element in the collection.

```javascript
$('.blitz').prepend(ele);
$('.blitz').prepend('<p>blitz.js</p>');
$('.blitz').prepend([ele, '<p>blitz.js</p>']);
```

> before

Place element(s) before each element in the collection.

```javascript
$('.blitz').before(ele);
$('.blitz').before('<p>blitz.js</p>');
$('.blitz').before([ele, '<p>blitz.js</p>']);
```

> after

Place element(s) after each element in the collection.

```javascript
$('.blitz').after(ele);
$('.blitz').after('<p>blitz.js</p>');
$('.blitz').after([ele, '<p>blitz.js</p>']);
```

> remove

Remove the collection from the DOM.

```javascript
$('.blitz').remove();
```

> children

Return children of the first element in the collection.

```javascript
$('.blitz').children();
```

> childNodes

Return child nodes of the first element in the collection.

```javascript
$('.blitz').childNodes();
```

> contains

Check if an element contains a given element in the DOM.

```javascript
$('.blitz').contains(ele);
```

> eq

Return element at the given index from the collection.

```javascript
$('.blitz').eq(0);
```

## DOM HTML

> html

Get the HTML contents of the first element, or set the HTML contents for each element in the collection.

```javascript
$('.blitz').html(); // get
$('.blitz').html('<p>blitz.js</p>'); // set
```

## DOM attributes

> attr

Get the value of an attribute for the first element, or set an attribute for each element in the collection.

```javascript
$('.blitz').attr('attrName'); // get
$('.blitz').attr('attrName', 'attrValue'); // set
```

## DOM class

> addClass

Add the given class(es) to each element in the collection.

```javascript
$('.blitz').addClass('foo', 'bar');
```

> removeClass

Remove the given class(es) from each element in the collection.

```javascript
$('.blitz').removeClass('foo', 'bar');
```

> toggleClass

Toggle the given class(es) of the first element in the collection.

```javascript
$('.blitz').toggleClass('foo');
```

> hasClass

Check if the first element in the collection has the given class.

```javascript
$('.blitz').hasClass('foo');
```

## DOM events

> on

Shorthand for <span style="background-color:#e2e3e5;color:#383d41">addEventListener</span>. Currently doesn't support event delegation.

```javascript
$('.blitz').on('eventName', callback);
```

> off

Shorthand for <span style="background-color:#e2e3e5;color:#383d41">removeEventListener</span>.

```javascript
$('.blitz').off('eventName');
$('.blitz').off('eventName', callback);
$('.blitz').off();
```

## DOM extra

> val

Get the value from the first, or set the value of each element in the collection.

```javascript
$('.blitz.input').val(); // get
$('.blitz.input').val('some value'); // set
```

> extend

Extend the properties of an object from the given sources, or extend blitz when no source is given.

```javascript
$.extend(targetObject, [, sourceObjects]);
$.extend(plugin);
$.extend([, plugins]);
```

## todo

- [ ] event delegation.
- [ ] event trigger.
- [ ] listen to events once, twice, thrice and nth.
