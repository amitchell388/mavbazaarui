import React, { useEffect, useState } from 'react'
import '../css/newpost.css'
import { useUser } from "../UserContext.jsx";

function NewPostModal({ isOpen, onClose }) {

    const userCtx = useUser();
    const user = userCtx?.user;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (isOpen) document.body.classList.add('modal-open')
        else document.body.classList.remove('modal-open')
        return () => document.body.classList.remove('modal-open')
    }, [isOpen])

    function handleImageChange(e) {
        setImage(e.target.files?.[0] ?? null);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            const userId = String(user?.id);
            const priceStr = String(price);
            const titleStr = String(title);
            const categoryStr = String(category);
            const descriptionStr = String(description);

            const url = `https://insy-project.onrender.com/post_listing/${encodeURIComponent(userId)}/${encodeURIComponent(titleStr)}/${encodeURIComponent(categoryStr)}/${encodeURIComponent(priceStr)}/${encodeURIComponent(descriptionStr)}`;

            const response = await fetch(url);
                
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }



        }
        catch(error){
            console.error('Error submitting post:', error);
        }
            


        
        onClose();
    }


    return (
        <div className={`modal ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>Add New Post</h2>
                        <button className="close-btn" onClick={onClose} aria-label="Close">✕</button>
                    </div>

                    <form className="post-form" onSubmit={handleSubmit}>
                        <label>
                            Title
                            <input value={title} onChange={e => setTitle(e.target.value)} required />
                        </label>

                        <label>
                            Category
                            <select value={category} onChange={e => setCategory(e.target.value)} required>
                                <option value="">Select category</option>
                                <option value="textbooks">Textbooks</option>
                                <option value="electronics">Electronics</option>
                                <option value="furniture">Furniture</option>
                                <option value="clothing">Clothing</option>
                                <option value="other">Other</option>
                            </select>
                        </label>

                        <label>
                            Description
                            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} />
                        </label>

                        <label>
                            Price (USD)
                            <input type="number" value={price} onChange={e => setPrice(e.target.value)} min="0" step="0.01" />
                        </label>

                        <label className="file-label">
                            Image
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </label>

                        <div className="form-actions">
                            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
                            <button type="submit" className="submit">Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPostModal;


