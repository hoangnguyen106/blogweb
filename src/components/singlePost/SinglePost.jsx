import './SinglePost.css';

function SinglePost() {
    return (
        <div className="singlePost">
            <div class="singlePostWrrapper">
                <img
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Safak</b>
                    </span>
                    <span className="singlePostDate">1 hours ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
                    doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa
                    quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
                    voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
                    beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum
                    necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
                    doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa
                    quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
                    voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
                    beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
