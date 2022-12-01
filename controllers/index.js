const books = [
    { title: 'Harry Potter', id: 1 },
    { title: 'Twilight', id: 2 },
    { title: 'Lorien Legacies', id: 3 }
]
const getBook = async (req, res) => {
    try {
        const book = books.find(c => c.id === parseInt(req.params.id));

        if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
        res.send(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = books.find(c => c.id === parseInt(req.params.id));
        if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

        const { error } = validateBook(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }

        book.title = req.body.title;
        res.send(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const deleteBook = async (req, res) => {
    try {
        const book = books.find(c => c.id === parseInt(req.params.id));
        if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

        const index = books.indexOf(book);
        books.splice(index, 1);

        res.send(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const createBook = async (req, res) => {
    try {
        const { error } = validateBook(req.body);
        if (error) {
            res.status(400).send(error.details[0].message)
            return;
        }
        const book = {
            id: books.length + 1,
            title: req.body.title
        };
        books.push(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getBooks = async (req, res) => {
    try {
        return res.status(200).json({ books });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

function validateBook(book) {
    const schema = {
        title: Joi.string().min(3).required()
    };
    return Joi.validate(book, schema);

}

module.exports = {
    createBook,
    getBooks,
    deleteBook,
    getBook,
    updateBook
};