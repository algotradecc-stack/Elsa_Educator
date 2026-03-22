const scenes = [
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc34\ud83c\udf0a",
        "who": "Elsa and the Water Nokk",
        "what": "Riding the magic water horse!",
        "where": "Over *there* in the Dark Sea!",
        "when": "At night time!",
        "why": "To find the truth!"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\u26c4\ud83c\udf42",
        "who": "Anna and Olaf",
        "what": "Walking and playing!",
        "where": "Right *here* in the Enchanted Forest!",
        "when": "In the morning!",
        "why": "Because they are exploring!"
    },
    {
        "emoji": "\ud83d\udc71\u200d\u2642\ufe0f\ud83e\udd8c\ud83c\udf32",
        "who": "Kristoff and Sven",
        "what": "Singing a song!",
        "where": "Deep *there* in the woods!",
        "when": "In the evening!",
        "why": "Because Kristoff feels sad!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83e\udd8e\ud83d\udd25",
        "who": "Elsa and Bruni",
        "what": "Making ice magic!",
        "where": "Right *here* in the forest!",
        "when": "In the afternoon!",
        "why": "To calm the fire spirit!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc69\ud83c\udffb\ud83c\udff0",
        "who": "Elsa and Anna",
        "what": "Opening the gates!",
        "where": "Right *here* at the castle!",
        "when": "In the morning!",
        "why": "To let the people in!"
    },
    {
        "emoji": "\u26c4\ud83c\udf43\ud83c\udf42",
        "who": "Olaf and Gale",
        "what": "Flying in the wind!",
        "where": "Up *there* in the sky!",
        "when": "In the afternoon!",
        "why": "Because the wind is playing!"
    },
    {
        "emoji": "\ud83e\udea8\ud83c\udf32\ud83c\udf33",
        "who": "The Earth Giants",
        "what": "Sleeping by the river!",
        "where": "Down *there* in the valley!",
        "when": "At night time!",
        "why": "Because they are tired!"
    },
    {
        "emoji": "\ud83d\udc82\u200d\u2642\ufe0f\ud83d\udee1\ufe0f\ud83c\udf32",
        "who": "Lieutenant Mattias",
        "what": "Guarding the forest!",
        "where": "Right *here* in the trees!",
        "when": "In the daytime!",
        "why": "To protect his people!"
    },
    {
        "emoji": "\ud83d\udc51\ud83d\udc78\ud83c\udffc\ud83d\udecf\ufe0f",
        "who": "Queen Iduna and little Elsa",
        "what": "Singing a lullaby!",
        "where": "Right *here* in the bedroom!",
        "when": "At bedtime!",
        "why": "To help Elsa sleep!"
    },
    {
        "emoji": "\ud83e\uddcc\ud83d\udd2e\u26f0\ufe0f",
        "who": "Grand Pabbie",
        "what": "Showing magic visions!",
        "where": "Over *there* in the troll valley!",
        "when": "At night time!",
        "why": "To warn the sisters!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\u2744\ufe0f\ud83c\udfd4\ufe0f",
        "who": "Elsa",
        "what": "Building an ice palace!",
        "where": "High up *there* on the mountain!",
        "when": "At sunrise!",
        "why": "To be free!"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\ud83d\udc71\u200d\u2642\ufe0f\ud83d\udef6",
        "who": "Anna and Kristoff",
        "what": "Riding in a boat!",
        "where": "Right *here* on the river!",
        "when": "In the daytime!",
        "why": "To find Elsa!"
    },
    {
        "emoji": "\ud83e\udd8c\ud83e\udd55\u2744\ufe0f",
        "who": "Sven",
        "what": "Eating a crunchy carrot!",
        "where": "Right *here* in the snow!",
        "when": "In the morning!",
        "why": "Because he is hungry!"
    },
    {
        "emoji": "\ud83d\uded6\ud83e\udde4\ud83e\udde3",
        "who": "Oaken",
        "what": "Selling winter clothes!",
        "where": "Right *here* in his shop!",
        "when": "In the afternoon!",
        "why": "To help travelers!"
    },
    {
        "emoji": "\u26c4\ud83c\udf3b\u2600\ufe0f",
        "who": "Olaf",
        "what": "Singing about summer!",
        "where": "Right *here* in the meadow!",
        "when": "In the hot daytime!",
        "why": "Because he loves the sun!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\u2744\ufe0f\ud83c\udf0a",
        "who": "Elsa",
        "what": "Freezing the big waves!",
        "where": "Over *there* at the beach!",
        "when": "At stormy night!",
        "why": "To cross the sea!"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\ud83e\udea8\ud83c\udfc3\u200d\u2640\ufe0f",
        "who": "Anna",
        "what": "Running away from giants!",
        "where": "Down *there* near the dam!",
        "when": "In the morning!",
        "why": "To break the dam!"
    },
    {
        "emoji": "\ud83d\udc71\u200d\u2642\ufe0f\ud83d\udc8d\ud83e\udd8c",
        "who": "Kristoff",
        "what": "Holding a shiny ring!",
        "where": "Right *here* in the woods!",
        "when": "At sunset!",
        "why": "To marry Anna!"
    },
    {
        "emoji": "\ud83e\udd8e\u2744\ufe0f\ud83d\udc45",
        "who": "Bruni",
        "what": "Catching snowflakes!",
        "where": "Right *here* on the branch!",
        "when": "In the winter morning!",
        "why": "Because it tastes yummy!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83c\udfa4\ud83c\udfd4\ufe0f",
        "who": "Elsa",
        "what": "Singing loudly!",
        "where": "Right *here* on the castle balcony!",
        "when": "At midnight!",
        "why": "Because she hears a voice!"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\ud83d\udc0e\ud83c\udf32",
        "who": "Anna",
        "what": "Riding a fast horse!",
        "where": "Over *there* through the trees!",
        "when": "In the daytime!",
        "why": "To catch up with Elsa!"
    },
    {
        "emoji": "\u26c4\ud83d\udcda\ud83e\udd13",
        "who": "Olaf",
        "what": "Reading a big book!",
        "where": "Right *here* in the library!",
        "when": "In the afternoon!",
        "why": "To learn new things!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc57\u2744\ufe0f",
        "who": "Elsa",
        "what": "Making a new ice dress!",
        "where": "Up *there* on the balcony!",
        "when": "At sunrise!",
        "why": "Because she feels happy!"
    },
    {
        "emoji": "\ud83d\udc71\u200d\u2642\ufe0f\ud83e\ude95\ud83c\udfb6",
        "who": "Kristoff",
        "what": "Playing his guitar!",
        "where": "Right *here* on the wagon!",
        "when": "At night time!",
        "why": "To entertain Sven!"
    },
    {
        "emoji": "\ud83e\udd8c\ud83d\udc45\ud83e\uddca",
        "who": "Sven",
        "what": "Licking a cold icicle!",
        "where": "Over *there* on the roof!",
        "when": "In the cold morning!",
        "why": "Because he is silly!"
    },
    {
        "emoji": "\ud83d\udc82\u200d\u2642\ufe0f\ud83c\udf42\ud83c\udfd5\ufe0f",
        "who": "Mattias and soldiers",
        "what": "Sitting by the fire!",
        "where": "Right *here* in the camp!",
        "when": "At night time!",
        "why": "To stay warm!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc69\ud83c\udffb\ud83e\udd1d",
        "who": "Elsa and Anna",
        "what": "Holding hands!",
        "where": "Right *here* in the courtyard!",
        "when": "In the sunny morning!",
        "why": "Because they love each other!"
    },
    {
        "emoji": "\ud83e\uddcc\ud83c\udf3f\ud83c\udf44",
        "who": "The little trolls",
        "what": "Rolling like rocks!",
        "where": "Down *there* in the valley!",
        "when": "In the afternoon!",
        "why": "To greet Kristoff!"
    },
    {
        "emoji": "\ud83c\udf2c\ufe0f\ud83c\udf43\ud83c\udf42",
        "who": "Gale the wind",
        "what": "Blowing leaves around!",
        "where": "Up *there* in the air!",
        "when": "In the breezy afternoon!",
        "why": "To play a game!"
    },
    {
        "emoji": "\ud83d\udc34\ud83d\udca7\ud83c\udf0a",
        "who": "The Water Nokk",
        "what": "Swimming fast!",
        "where": "Deep *there* under the water!",
        "when": "At midnight!",
        "why": "To guard the river!"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\u26c4\ud83d\udef6",
        "who": "Anna and Olaf",
        "what": "Sliding down the waterfall!",
        "where": "Over *there* in the ice cave!",
        "when": "In the daytime!",
        "why": "To escape the dark!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc8e\u2744\ufe0f",
        "who": "Elsa",
        "what": "Finding the magic crystals!",
        "where": "Right *here* in the sky!",
        "when": "At night time!",
        "why": "To save Arendelle!"
    },
    {
        "emoji": "\ud83d\udc71\u200d\u2642\ufe0f\ud83e\udd8c\ud83c\udf4e",
        "who": "Kristoff and Sven",
        "what": "Sharing a red apple!",
        "where": "Right *here* in the barn!",
        "when": "In the morning!",
        "why": "Because it is breakfast time!"
    },
    {
        "emoji": "\ud83d\uded6\ud83e\uddd6\u200d\u2642\ufe0f\ud83d\udd25",
        "who": "Oaken's family",
        "what": "Saying 'Hoo-hoo'!",
        "where": "Right *here* in the hot sauna!",
        "when": "In the cold evening!",
        "why": "Because they are relaxing!"
    },
    {
        "emoji": "\ud83e\udd8e\ud83d\udd25\ud83c\udfc3\u200d\u2642\ufe0f",
        "who": "Bruni",
        "what": "Running very fast!",
        "where": "Over *there* on the rocks!",
        "when": "In the afternoon!",
        "why": "Because he is excited!"
    },
    {
        "emoji": "\ud83e\udea8\ud83d\udc63\ud83d\udca5",
        "who": "An Earth Giant",
        "what": "Stomping its big feet!",
        "where": "Over *there* by the river!",
        "when": "At sunset!",
        "why": "Because it is angry!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc34\u2728",
        "who": "Elsa",
        "what": "Turning the Nokk to ice!",
        "where": "Over *there* on the water!",
        "when": "At sunrise!",
        "why": "To ride to Ahtohallan!"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\ud83d\udc51\ud83c\udff0",
        "who": "Anna",
        "what": "Wearing a new crown!",
        "where": "Right *here* in the castle!",
        "when": "In the daytime!",
        "why": "Because she is the new Queen!"
    },
    {
        "emoji": "\u26c4\u2744\ufe0f\ud83c\udf89",
        "who": "Olaf",
        "what": "Making a snow flurry!",
        "where": "Right *here* in the town square!",
        "when": "In the afternoon!",
        "why": "To make the children smile!"
    },
    {
        "emoji": "\ud83d\udc82\u200d\u2642\ufe0f\ud83d\udcdc\ud83e\udd14",
        "who": "Mattias",
        "what": "Looking at an old map!",
        "where": "Right *here* in the tent!",
        "when": "In the morning!",
        "why": "To find the way home!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc69\ud83c\udffb\ud83d\udea2",
        "who": "Elsa and Anna",
        "what": "Looking at a broken ship!",
        "where": "Over *there* in the foggy woods!",
        "when": "In the spooky evening!",
        "why": "To find clues!"
    },
    {
        "emoji": "\ud83d\udc71\u200d\u2642\ufe0f\ud83d\udc8d\ud83d\ude05",
        "who": "Kristoff",
        "what": "Practicing his proposal!",
        "where": "Right *here* behind a tree!",
        "when": "In the daytime!",
        "why": "Because he is nervous!"
    },
    {
        "emoji": "\ud83e\udd8c\ud83d\udef7\u2744\ufe0f",
        "who": "Sven",
        "what": "Pulling the heavy sled!",
        "where": "Over *there* on the snowy path!",
        "when": "In the morning!",
        "why": "To help his friends travel!"
    },
    {
        "emoji": "\ud83e\udd8e\u2744\ufe0f\ud83d\ude34",
        "who": "Bruni",
        "what": "Sleeping peacefully!",
        "where": "Right *here* in Elsa's hands!",
        "when": "At night time!",
        "why": "Because he is cold and safe!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83e\uddca\ud83d\udc0e",
        "who": "Elsa",
        "what": "Galloping on the ice horse!",
        "where": "Over *there* towards the glacier!",
        "when": "In the bright morning!",
        "why": "To reach the magic river!"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\ud83d\udde1\ufe0f\ud83e\udea8",
        "who": "Anna",
        "what": "Waving a sword!",
        "where": "Down *there* by the rocky shore!",
        "when": "At twilight!",
        "why": "To get the giants' attention!"
    },
    {
        "emoji": "\u26c4\ud83c\udf42\ud83c\udfc3\u200d\u2642\ufe0f",
        "who": "Olaf",
        "what": "Running away from the wind!",
        "where": "Right *here* in the clearing!",
        "when": "In the windy afternoon!",
        "why": "Because Gale is tickling him!"
    },
    {
        "emoji": "\ud83d\udc82\u200d\u2642\ufe0f\ud83d\udcf8\ud83d\ude32",
        "who": "Mattias",
        "what": "Looking at a photograph!",
        "where": "Right *here* in the forest!",
        "when": "In the daytime!",
        "why": "Because he has never seen one!"
    },
    {
        "emoji": "\ud83d\udc78\ud83c\udffc\ud83d\udc69\ud83c\udffb\u26c4\ud83d\udc71\u200d\u2642\ufe0f\ud83e\udd8c",
        "who": "Everyone together",
        "what": "Having a picnic!",
        "where": "Right *here* on the blanket!",
        "when": "In the sunny afternoon!",
        "why": "To celebrate being a family!"
    },
    {
        "emoji": "\ud83d\udc51\ud83d\udc78\ud83c\udffc\ud83d\udc69\ud83c\udffb",
        "who": "King Agnarr",
        "what": "Telling a bedtime story!",
        "where": "Right *here* in the girls' room!",
        "when": "At night time!",
        "why": "To teach them about the forest!"
    }
];