import discord
from discord.ext import commands
import random
import string

intents = discord.Intents.default()
intents.message_content = True  # Enable message content intent

bot = commands.Bot(command_prefix="!", intents=intents)

# This dictionary will store the generated codes for each user
user_codes = {}

# Function to generate a random code
def generate_random_code():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

# Event when the bot is ready
@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')
    for guild in bot.guilds:
        # Send a message in the general channel or any specific channel
        channel = discord.utils.get(guild.text_channels, name='chess-code')  # Change to your channel name
        if channel:
            await channel.send("👋 Hello everyone! I'm your friendly bot. Here's how to use me:\n\n"
                                "- Click on me and start a chat by typing `!getcode` → This will generate a unique code for yourself to use for each game. Click the button when prompted! \n - Before the start of any game, type `!getcode` within the private bot chat to receive a new code"
                               )

# Command to show help message
@bot.command(name="myhelp")
async def help_command(ctx):
    help_message = (
        "👋 Hello! I'm your friendly bot. Here's how to use me:\n\n"
        "**Commands:**\n"
        "- Click on me and start a chat by typing `!getcode` → Generate a unique code for yourself to use for each game. Click the button when prompted!\n"
        "- You’ll get a private message (DM) with your unique code.\n"

        "- Make sure to only use the `!getcode` command if you're ready to receive a code.\n"
        
    )
    await ctx.send(help_message)

# Command to generate the code and send button to user
@bot.command(name="getcode")
async def get_code(ctx):
    
    # Send instructions along with the button
    help_message = (
        "🎉Once you click the button, you'll receive your code via private message (DM)."
    )

    await ctx.send(help_message)

    # Create and send the button for user to click
    view = CodeButton(ctx.author)
    await ctx.send("Click the button below to generate your code:", view=view)

# Define the button class
class CodeButton(discord.ui.View):
    def __init__(self, user):
        super().__init__()
        self.user = user

    @discord.ui.button(label="Generate Code", style=discord.ButtonStyle.primary)
    async def generate_code(self, interaction: discord.Interaction, button: discord.ui.Button):
        if interaction.user != self.user:
            await interaction.response.send_message("This button is not for you!", ephemeral=True)
            return

        # Generate a random code and store it in the user_codes dictionary
        random_code = generate_random_code()
        user_codes[self.user.id] = random_code

        # Send the code to the user via DM
        await interaction.user.send(f"Your unique code is: {random_code}")

        # Notify the admin with the user and the generated code
        admin = await bot.fetch_user(667679042690088960)  # Use fetch_user to get the admin
        if admin:
            await admin.send(f"New code generated for {interaction.user.name}: {random_code}")

        # # Respond to the user
        # await interaction.response.send_message(f"Your code has been sent to you via DM!", ephemeral=True)

# Run the bot with your token
bot.run('MTM1ODM0NjIxNzI5MzA4NjkyNw.G2vQw1.nzhkQB2UmVf8sUKd5S5ppKHi7kS7jaTYtiDwqo')  # Replace with your bot's token
