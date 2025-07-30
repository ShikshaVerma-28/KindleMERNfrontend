"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './Signup.module.css'
import { useState } from 'react';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;


const CreateAccount = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const router = useRouter()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        const { name, email, password, confirmpassword } = formData;

        if (password !== confirmpassword) {
            alert('Passwords do not match')
            return;
        }
        try {
            const response = await fetch(`${apiUrl}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            if (response.ok) {
                alert('Account created successfully');
                router.push('/login')
                //Redirect to login or another page if necessary
            }
            else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating account')
        }
    }

        return (
            <div className={styles.createAccountContainer}>
                <Image src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo_DKBL._CB609671824_.png"
                    alt="Amazon Kindle Logo"
                    className={styles.logo}
                    width={150}
                    height={50}
                />
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" placeholder='First and last name' value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='At least 6 characters' value={formData.password} onChange={handleChange} required />
                    <p className={styles.passwordInfo}>Passwords must be atleast 6 characters.</p>

                    <label htmlFor="password-again">Re-enter Password</label>
                    <input type="password" id="confirmpassword" placeholder='At least 6 characters' value={formData.confirmpassword} onChange={handleChange} required />

                    <button type='submit' className={styles.createAccountButton}>Create your Amazon account</button>
                </form>

                <p className={styles.agreement}>
                    By clicking &quot;Create your Amazon account&quot;, you agree to the <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">Amazon Conditions of Use</a>, the <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201014950"> Kindle Store Terms of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496"> Amazon&apos;s Privacy Notice</a>.
                </p>

                <p className={styles.signin}>Already have an account? <a href="/login">Sign in</a>
                </p>
            </div>
        )
        }
    export default CreateAccount