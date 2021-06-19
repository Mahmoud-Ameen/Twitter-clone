export default function ProfileInfo () {
  return `
	<section class="profile-info">
					<div class="cover">
						<img src="https://pbs.twimg.com/profile_banners/1566463268/1470764371/600x200" alt="user name">
					</div>

					
					<div class="body">
						<div class="upper">
							<div class="profile-image">
								<img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_200x200.png" alt="react">
							</div>
							<div class="actions">
								<span class="icon more border-primary color-primary action">
									<svg viewBox="0 0 24 24" aria-hidden="true"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
								</span>
								<span class="icon color-primary border-primary notify action hide"><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23.24 3.26h-2.425V.832c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.26H16.89c-.414 0-.75.335-.75.75s.336.75.75.75h2.426v2.424c0 .414.336.75.75.75s.75-.336.75-.75V4.76h2.425c.415 0 .75-.337.75-.75s-.336-.75-.75-.75zm-6.23 7.606c.02-2.434-.782-4.597-2.258-6.09-1.324-1.342-3.116-2.084-5.046-2.093h-.013c-1.93.01-3.722.75-5.046 2.092C3.172 6.27 2.37 8.433 2.39 10.867 2.426 15 .467 16.56.39 16.62c-.26.193-.367.53-.266.838.102.308.39.515.712.515h4.716c.11 2.226 1.94 4.007 4.194 4.007s4.083-1.78 4.194-4.007h4.625c.32 0 .604-.206.707-.51s0-.643-.255-.838c-.082-.064-2.043-1.625-2.008-5.76zM9.745 20.48c-1.426 0-2.586-1.11-2.694-2.508h5.388c-.108 1.4-1.268 2.507-2.694 2.507zm-7.29-4.007c.702-1.095 1.457-2.904 1.434-5.618-.017-2.062.614-3.8 1.825-5.025C6.757 4.774 8.172 4.19 9.7 4.184c1.527.007 2.943.59 3.985 1.646 1.21 1.226 1.84 2.963 1.823 5.025-.022 2.714.732 4.523 1.437 5.618H2.455z"></path></g></svg></span>
								<button class="follow btn btn--outline action"> Follow </button>
							</div>
						</div>
						<p class="profile__name text-heading mt-2">
							React 
							<span class="verified color-primary"><svg viewBox="0 0 24 24" aria-label="Verified account" ><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></span>
						</p>
						<span class="profile__username text-secondary mb-3">@reactjs</span>

						<p class="profile__bio my-2">
							React is a JavaScript library for building user interfaces.
						</p>

						<div class="my-2">
							<span class="following text-secondary">
								<span class="text-bold">268</span>
								Following
							</span>
							<span class="followers ml-2 text-secondary">
								<span class="text-bold">491.3k</span> Followers
							</span>
						</div>
						<div class="followed-by text-secondary mb-2">
							<p>Not followed by anyone you’re following</p>
						</div>

					</div>

				</section>
	`
}
