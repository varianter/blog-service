const fetch = require("node-fetch");
const limit = 6;

function hasTag(post, tag) {
  const tags = post.virtuals.tags.map(i => i.slug);
  return tags.includes(tag.toLowerCase());
}

module.exports = async (_, res) => {
  // Allow all to get latest posts.
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const request = await fetch(
      `https://medium.com/variant-as/latest?format=json&limit=20`
    );
    const dataText = await request.text();
    const data = dataText.replace("])}while(1);</x>", "");
    const parsed = JSON.parse(data);

    if (!parsed.success) {
      return parsed;
    }

    return parsed.payload.posts
      .filter(p => !hasTag(p, "variantdag") && !hasTag(p, "results"))
      .slice(0, limit);
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: "Unable to get blog entries"
    };
  }
};
