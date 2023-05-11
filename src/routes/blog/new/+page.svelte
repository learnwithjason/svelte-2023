<script>
	import { enhance } from '$app/forms';
</script>

<h1>Create a new blog</h1>

<form method="post" use:enhance>
	<label for="title">Title</label>
	<input type="text" name="title" id="title" />

	<label for="slug">Slug</label>
	<input type="text" name="slug" id="slug" />

	<label for="content">Content</label>
	<input type="text" name="content" id="content" />

	<button type="submit">Save</button>
</form>
